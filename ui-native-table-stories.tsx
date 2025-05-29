import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from './table';
import { Checkbox } from '../checkbox';
import { Badge } from '../badge';

const meta: Meta<typeof Table> = {
  title: 'Primitives/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <View style={{ padding: 20, minWidth: 350 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Table>;

// Sample data
const invoices = [
  {
    id: 'INV001',
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'INV002',
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    id: 'INV003',
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 'INV004',
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'INV005',
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead width={100}>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead align="right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell textStyle={{ fontWeight: '500' }}>
              {invoice.invoice}
            </TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell align="right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell flex={3}>Total</TableCell>
          <TableCell align="right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Table>
      <TableCaption>Invoice status with badges</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead align="right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell textStyle={{ fontWeight: '500' }}>
              {invoice.invoice}
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  invoice.paymentStatus === 'Paid'
                    ? 'default'
                    : invoice.paymentStatus === 'Pending'
                    ? 'outline'
                    : 'destructive'
                }
              >
                {invoice.paymentStatus}
              </Badge>
            </TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell align="right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Selectable: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
    const [selectAll, setSelectAll] = useState(false);

    const handleRowSelect = (rowId: string) => {
      const newSelected = new Set(selectedRows);
      if (newSelected.has(rowId)) {
        newSelected.delete(rowId);
      } else {
        newSelected.add(rowId);
      }
      setSelectedRows(newSelected);
      setSelectAll(newSelected.size === invoices.length);
    };

    const handleSelectAll = () => {
      if (selectAll) {
        setSelectedRows(new Set());
        setSelectAll(false);
      } else {
        setSelectedRows(new Set(invoices.map(inv => inv.id)));
        setSelectAll(true);
      }
    };

    return (
      <Table selectedRows={selectedRows} onRowSelect={handleRowSelect}>
        <TableCaption>
          Selectable table with {selectedRows.size} of {invoices.length} rows selected
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead width={50}>
              <Checkbox
                checked={selectAll}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead align="right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id} rowId={invoice.id}>
              <TableCell>
                <Checkbox
                  checked={selectedRows.has(invoice.id)}
                  onCheckedChange={() => handleRowSelect(invoice.id)}
                />
              </TableCell>
              <TableCell textStyle={{ fontWeight: '500' }}>
                {invoice.invoice}
              </TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell align="right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const ClickableRows: Story = {
  render: () => {
    const [clickedRow, setClickedRow] = useState<string | null>(null);

    return (
      <View>
        {clickedRow && (
          <Text style={{ marginBottom: 10, fontWeight: '500' }}>
            Last clicked: {clickedRow}
          </Text>
        )}
        <Table>
          <TableCaption>Click on any row to see the interaction</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead align="right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                key={invoice.invoice}
                onPress={() => setClickedRow(invoice.invoice)}
              >
                <TableCell textStyle={{ fontWeight: '500' }}>
                  {invoice.invoice}
                </TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell align="right">{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </View>
    );
  },
};

export const SimpleTable: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>City</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>30</TableCell>
          <TableCell>New York</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>25</TableCell>
          <TableCell>Los Angeles</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>35</TableCell>
          <TableCell>Chicago</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WideTable: Story = {
  render: () => (
    <Table>
      <TableCaption>Wide table that scrolls horizontally</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead width={100}>ID</TableHead>
          <TableHead width={150}>Name</TableHead>
          <TableHead width={120}>Email</TableHead>
          <TableHead width={100}>Phone</TableHead>
          <TableHead width={150}>Address</TableHead>
          <TableHead width={100}>City</TableHead>
          <TableHead width={80}>State</TableHead>
          <TableHead width={100}>ZIP</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>001</TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>555-0123</TableCell>
          <TableCell>123 Main St</TableCell>
          <TableCell>New York</TableCell>
          <TableCell>NY</TableCell>
          <TableCell>10001</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>002</TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>555-0456</TableCell>
          <TableCell>456 Oak Ave</TableCell>
          <TableCell>Los Angeles</TableCell>
          <TableCell>CA</TableCell>
          <TableCell>90210</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};