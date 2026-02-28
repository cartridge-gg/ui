import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Table as UITable, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, TableFooter, } from "../components/primitives/table";
const meta = {
    title: "Primitives/Table",
    component: Table,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
];
function Table() {
    return (_jsxs(UITable, { children: [_jsx(TableCaption, { children: "A list of your recent invoices." }), _jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { className: "w-[100px]", children: "Invoice" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Method" }), _jsx(TableHead, { className: "text-right", children: "Amount" })] }) }), _jsx(TableBody, { children: invoices.map((invoice) => (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: invoice.invoice }), _jsx(TableCell, { children: invoice.paymentStatus }), _jsx(TableCell, { children: invoice.paymentMethod }), _jsx(TableCell, { className: "text-right", children: invoice.totalAmount })] }, invoice.invoice))) }), _jsx(TableFooter, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { colSpan: 3, children: "Total" }), _jsx(TableCell, { className: "text-right", children: "$2,500.00" })] }) })] }));
}
//# sourceMappingURL=table.stories.js.map