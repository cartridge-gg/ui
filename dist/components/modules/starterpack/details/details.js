import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardHeader, CardListContent, CardListItem, CardTitle, } from "../../../../components/primitives";
import { cn, formatAddress } from "../../../../utils";
import React from "react";
export var StarterpackStatus;
(function (StarterpackStatus) {
    StarterpackStatus["CLAIMED"] = "Claimed";
    StarterpackStatus["CLAIMABLE"] = "Claimable";
})(StarterpackStatus || (StarterpackStatus = {}));
export const StarterpackDetails = React.forwardRef(({ status, createdBy, owner, claimedOn, className, ...props }, ref) => {
    return (_jsxs(Card, { className: cn(className), ...props, ref: ref, children: [_jsx(CardHeader, { className: "py-2.5 px-3", children: _jsx(CardTitle, { className: "normal-case font-semibold text-xs w-full flex items-center justify-between", children: "Contents" }) }), _jsxs(CardListContent, { className: "font-normal text-sm", children: [_jsxs(CardListItem, { className: "flex flex-row items-center justify-between p-3 bg-background-200", children: [_jsx("span", { className: "text-foreground-300", children: "Status" }), _jsx("span", { className: cn(status === StarterpackStatus.CLAIMED
                                    ? "text-foreground-400"
                                    : "text-constructive"), children: status.toString() })] }), _jsxs(CardListItem, { className: "flex flex-row items-center justify-between p-3 bg-background-200", children: [_jsx("span", { className: "text-foreground-300", children: "Created By" }), _jsx("span", { children: createdBy })] }), _jsxs(CardListItem, { className: "flex flex-row items-center justify-between p-3 bg-background-200", children: [_jsx("span", { className: "text-foreground-300", children: "Owner" }), _jsx("span", { children: formatAddress(owner, { first: 4, last: 4 }) })] }), _jsxs(CardListItem, { className: "flex flex-row items-center justify-between p-3 bg-background-200", children: [_jsx("span", { className: "text-foreground-300", children: "Claimed On" }), _jsx("span", { children: formatDate(claimedOn) })] })] })] }));
});
StarterpackDetails.displayName = "StarterPackDetails";
const formatDate = (date) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    // Add ordinal suffix (st, nd, rd, th)
    let suffix = "th";
    if (day % 10 === 1 && day !== 11)
        suffix = "st";
    else if (day % 10 === 2 && day !== 12)
        suffix = "nd";
    else if (day % 10 === 3 && day !== 13)
        suffix = "rd";
    // Format time in 12-hour format with am/pm
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12 for 12 AM
    return `${month} ${day}${suffix}, ${year} at ${hours}:${minutes} ${ampm}`;
};
//# sourceMappingURL=details.js.map