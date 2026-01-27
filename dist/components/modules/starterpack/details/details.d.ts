import React from "react";
export declare const enum StarterpackStatus {
    CLAIMED = "Claimed",
    CLAIMABLE = "Claimable"
}
export interface StarterpackDetailsProps {
    status: StarterpackStatus;
    createdBy: string;
    owner: string;
    claimedOn: Date;
}
export declare const StarterpackDetails: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & StarterpackDetailsProps & React.RefAttributes<HTMLDivElement>>;
