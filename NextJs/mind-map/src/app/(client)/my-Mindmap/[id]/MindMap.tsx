"use client";
import React, { memo, useCallback, useEffect, useState, useRef } from "react";
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    useReactFlow,
    ReactFlowProvider,
} from "@xyflow/react";
import { useRouter } from "next/navigation";

import "@xyflow/react/dist/style.css";
import TextUpdaterNode from "../CustomNode";
import { toast } from "react-toastify";
const initialEdges: any = [];
const nodeTypes = { textUpdater: TextUpdaterNode };
interface Prop {
    id: string;
    mapData: [];
    dataJson: any;
    userId: any;
    checkMode: any;
}
function MindMap({
    id: mindMapId,
    mapData,
    dataJson,
    userId,
    checkMode,
}: Prop) {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [mode, setMode] = useState(dataJson?.checkStatus);
    const [selected, setSelected] = useState("");
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const currentNodeId = useRef(null);

    //

    const handleSave = useCallback(async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL_MINDMAP}`);
            const data = await res.json();
            const userIndex = data.findIndex((user: any) => user.id === userId);
            if (userIndex === -1) {
                throw new Error("User not found");
            }

            const updatedMindMapData = data[userIndex].mindMapData.map(
                (item: any) => {
                    if (item.idMap === mindMapId) {
                        return {
                            ...dataJson,
                            checkStatus: mode,
                            title: title,
                            description: description,
                            data: {
                                nodes: nodes,
                                edges: edges,
                            },
                        };
                    }
                    return item;
                }
            );

            data[userIndex].mindMapData = updatedMindMapData;
            const updateRes = fetch(
                `${process.env.NEXT_PUBLIC_URL_MINDMAP}/${userId}`,

                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data[userIndex]),
                }
            );

            if (!res.ok) {
                throw new Error(res.statusText);
            }
            toast.success("Lưu thành công");
            router.refresh();
            return await updateRes.json();
        } catch (err) {}
    }, [mapData, edges, nodes, title, description, mode, dataJson]);

    const getMaxId = useCallback(() => {
        return (
            nodes
                .map((node) => parseInt(node.id))
                .reduce((a, b) => Math.max(a, b), 0) || 0
        );
    }, [nodes]);

    const { screenToFlowPosition } = useReactFlow();
    const onConnect = useCallback(
        (params: any) => {
            currentNodeId.current = null;
            setEdges((eds) => addEdge(params, eds));
        },
        [setEdges]
    );

    const onConnectStart = useCallback((_, { nodeId }) => {
        currentNodeId.current = nodeId;
    }, []);

    const onConnectEnd = useCallback(
        (event, _) => {
            const { clientX, clientY } = event;

            const targetNode = nodes.find((node) => {
                const nodeBounds: any = document
                    .querySelector(`[data-id="${node.id}"]`)
                    .getBoundingClientRect();

                return (
                    clientX >= nodeBounds.left &&
                    clientX <= nodeBounds.right &&
                    clientY >= nodeBounds.top &&
                    clientY <= nodeBounds.bottom
                );
            });

            if (targetNode) {
                setEdges((eds): any => {
                    const check = eds.find((edge) => {
                        return (
                            edge.id ===
                            `${currentNodeId.current}-${targetNode.id}`
                        );
                    });

                    if (check && Object.keys(check).length > 0) {
                        return eds;
                    } else {
                        return [
                            ...eds,
                            {
                                id: `${currentNodeId.current}-${targetNode.id}`,
                                source: currentNodeId.current,
                                target: targetNode.id,
                            },
                        ];
                    }
                });
                return;
            } else {
                const maxId = getMaxId();
                const newNode: any = {
                    id: `${maxId + 1}`,
                    position: screenToFlowPosition({
                        x: event.clientX,
                        y: event.clientY,
                    }),
                    data: { label: "Node " + (maxId + 1) + "" },
                    type: "textUpdater",
                };
                setNodes((nds): any => nds.concat(newNode));
                setEdges((eds): any =>
                    eds.concat({
                        id: `${currentNodeId.current}-${newNode.id}`,
                        source: currentNodeId.current,
                        target: newNode.id,
                    })
                );
            }
        },
        [setEdges, setNodes, getMaxId, screenToFlowPosition, nodes]
    );

    useEffect(() => {
        if (mapData && Object.keys(mapData).length > 0) {
            setNodes(() => mapData.nodes);
            setEdges(() => mapData.edges);
        } else {
            setNodes((): any => [
                {
                    id: "0",
                    position: { x: 100, y: 50 },
                    data: { label: `My MindMap` },
                    origin: [0.5, 0.0],
                    type: "textUpdater",
                },
            ]);
        }
    }, [mapData]);
    useEffect(() => {
        setTitle(dataJson?.title);
        setDescription(dataJson?.description);
    }, [dataJson]);
    useEffect(() => {
        document.addEventListener("keyup", (e) => {
            e.preventDefault();
            if (e.key === "Delete" && selected != 0) {
                setNodes((nds) => nds.filter((node) => node.id !== selected));
                setEdges((eds) =>
                    eds.filter(
                        (edge) =>
                            edge.source !== selected && edge.target !== selected
                    )
                );
                setEdges((eds) => eds.filter((edge) => edge.id !== selected));
            }
        });
    }, [selected]);

    return (
        <section>
            <div className=" mx-auto px-4 mt-10">
                <div className="row mb-16 flex justify-between">
                    <div className="flex flex-col">
                        <input
                            className="title font-semibold text-3xl text-gray-600 outline-none focus:outline-none border-none"
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            value={title}
                        />

                        <input
                            className="desc text-gray-500 mt-5 text-lg outline-none focus:outline-none border-none"
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            value={description}
                        />
                    </div>
                    {checkMode === "Edit" && (
                        <div className="action">
                            <button
                                className="btn mr-5 px-2 py-1 text-sm text-white font-semibold bg-sky-500 rounded bg-sky-200"
                                onClick={handleSave}
                            >
                                Lưu thay đổi
                            </button>
                            <select
                                onChange={(e) => {
                                    setMode(e.target.value);
                                }}
                                className="px-2 py-1 text-sm text-white font-semibold  rounded bg-blue-500   outline-none focus:outline-none border-none"
                            >
                                <option value={mode}>
                                    Chế độ hiện tại: {mode}
                                </option>
                                <option value="private">private</option>
                                <option value="public">public</option>
                            </select>
                        </div>
                    )}
                </div>
                <div style={{ width: "100%", height: "70vh" }}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onConnectStart={onConnectStart}
                        onConnectEnd={onConnectEnd}
                        onNodeClick={(_, { id }) => {
                            setSelected(id);
                        }}
                        onEdgeClick={(_, { id }) => {
                            setSelected(id);
                        }}
                        nodeTypes={nodeTypes}
                        fitView
                        fitViewOptions={{ padding: 0.5 }}
                        attributionPosition="top-right"
                    >
                        <Controls />
                        <MiniMap />
                        <Background variant="dots" gap={12} size={1} />
                    </ReactFlow>
                </div>
            </div>
        </section>
    );
}

function FlowWithProvider(props: any) {
    return (
        <ReactFlowProvider>
            <MindMap {...props} />
        </ReactFlowProvider>
    );
}

export default memo(FlowWithProvider);
