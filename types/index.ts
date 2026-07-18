export type NodeStatus="inactive"|"active"|"activated";
export type EdgeType="algo"|"direct";
export interface DemographicProfile{
    age:number;
    profession:string;
    geographicLocation:string;
}
export interface PsychographicProfile{
    politicalLeaning:"Left"|"center-Left"|"Neutral"|"center-Right"|"Right";
    susceptibilityRating:number;
    retweetFrequency:number;
    coreInterests:string[];
}
export interface SyntheticPersona{
    id:string;
    name:string;
    handle:string;
    avatar:string;
    bio:string;
    demographics:DemographicProfile;
    psychographics:PsychographicProfile;
}
export interface SimulationNode {
  id: string;
  status: NodeStatus;
  persona: SyntheticPersona;
  x?: number;
  y?: number;
}
export interface SimulationEdge{
    source:string;
    target:string;
    type:EdgeType;
    strength:number;
}
export interface SimulationState{
    nodes:SimulationNode[];
    edges:SimulationEdge[];
    currentRound:number;
    totalRounds:number;
    isRunning:boolean;

}