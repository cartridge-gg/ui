import React from "react";
export interface StarterpackClaimableProps {
    items: Array<string>;
    isClaimed?: boolean;
}
export declare const StarterpackClaimable: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & StarterpackClaimableProps & React.RefAttributes<HTMLDivElement>>;
