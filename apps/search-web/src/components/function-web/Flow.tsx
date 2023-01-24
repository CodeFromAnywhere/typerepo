import { useCallback, useState } from "react";
import { ChildObject } from "recursive-types";
import ReactFlow, {
  addEdge,
  Node,
  applyNodeChanges,
  FitViewOptions,
  applyEdgeChanges,
  Edge,
} from "reactflow";

const initialNodes: Node[] = [
  { id: "node-1", data: { label: "Node 1" }, position: { x: 5, y: 5 } },
  { id: "node-2", data: { label: "Node 2" }, position: { x: -50, y: 100 } },
  { id: "node-3", data: { label: "Node 3" }, position: { x: 50, y: 100 } },
];

// const initialEdges: Edge[] = [
//   { id: "e1-2", source: "1", target: "2" },
//   { id: "e1-3", source: "1", target: "3" },
// ];

const initialEdges = [
  { id: "edge-1", source: "node-1", sourceHandle: "a", target: "node-2" },
  { id: "edge-2", source: "node-1", sourceHandle: "b", target: "node-3" },
];

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

export const Flow = <T extends { [key: string]: any }>(props: {
  renderNode: (item: T) => JSX.Element;
  childObject: ChildObject<T>;
}) => {
  const { childObject, renderNode } = props;

  //

  // const [nodes, setNodes] = useNodesState<Node[]>(initialNodes);
  // const [edges, setEdges] = useEdgesState<Edge[]>(initialEdges);

  // const onNodesChange = useCallback(
  //   (changes: NodeChange[]) =>
  //     setNodes((nds) => applyNodeChanges(changes, nds)),
  //   [setNodes]
  // );
  // const onEdgesChange = useCallback(
  //   (changes: EdgeChange[]) =>
  //     setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges]
  // );
  // const onConnect = useCallback(
  //   (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
  //   [setEdges]
  // );

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState<Edge<any>[]>([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      fitViewOptions={fitViewOptions}
    />
  );
};

export const Test = () => {
  return (
    <Flow
      renderNode={(item: { todo: string; status: string }) => {
        return <div />;
      }}
      childObject={{
        status: "lala",
        todo: "sss",
        children: [{ status: "", todo: "", children: [] }],
      }}
    />
  );
};
