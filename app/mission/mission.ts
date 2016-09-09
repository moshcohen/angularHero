export class Mission {
    _id : string;
    name : string;
    assignee : string;
    assigner : string;
    target : string;
    parentMission : string;
    childMissions : string[];
    startTime : Date;
    initialEndTime : Date;
    actualEndTime : Date;
    reward : number;
}