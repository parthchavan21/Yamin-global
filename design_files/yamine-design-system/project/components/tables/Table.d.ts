import * as React from "react";

export interface TableColumn<Row = any> {
  key: string;
  label: React.ReactNode;
  /** Right-align + tabular monospace. */
  numeric?: boolean;
  /** Custom cell renderer (e.g. a Badge for status columns). */
  render?: (row: Row) => React.ReactNode;
}

/**
 * Data / specification table with header, hover, selection, numeric & status columns.
 * @startingPoint section="Data" subtitle="Spec / telemetry data table" viewport="700x320"
 */
export interface TableProps<Row = any> extends React.HTMLAttributes<HTMLDivElement> {
  columns: TableColumn<Row>[];
  rows: Row[];
  /** Field used as the React key + selection key. @default "id" */
  rowKey?: string;
  striped?: boolean;
  /** Row hover highlight. @default true */
  hoverable?: boolean;
  selectedKeys?: Array<string | number>;
  onRowClick?: (row: Row) => void;
  emptyMessage?: React.ReactNode;
}

export function Table<Row = any>(props: TableProps<Row>): JSX.Element;
