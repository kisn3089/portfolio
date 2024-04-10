import React from "react";
import { ChartLayout } from "./LineChartStyles";
import { ResponsiveLine } from "@nivo/line";
import { theme } from "@/styles/theme";
import { formatToLabel } from "@/lib/util/adjustDate";

const defaultData = [
  {
    id: "stock",
    data: [
      {
        x: "20240403",
        y: "88301",
      },
      {
        x: "20240404",
        y: "87231",
      },
      {
        x: "20240405",
        y: "81231",
      },
      {
        x: "20240406",
        y: "82231",
      },
      {
        x: "20240407",
        y: "79231",
      },
      {
        x: "20240408",
        y: "85231",
      },
      {
        x: "20240409",
        y: "86231",
      },
    ],
  },
];

interface LineChartProps {
  chartData: { id: string; data: { x: string; y: string }[] }[];
  range: { min: number; max: number };
}

const LineChart = ({ chartData, range }: LineChartProps) => {
  return (
    <ChartLayout>
      <ResponsiveLine
        data={chartData || defaultData}
        colors={[theme.palette.blue]}
        animate={true}
        curve="cardinal"
        margin={{ top: 30, right: 25, bottom: 25, left: 65 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: range.min + range.min / 5,
          max: range.max - range.max / 8,
        }}
        yFormat=">-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
          legendOffset: -55,
          legendPosition: "middle",
          format: (value) => formatToLabel(value),
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 13,
          tickRotation: 0,
          tickValues: 4,
          legendOffset: -55,
          legendPosition: "middle",
          format: (value) => Number(value).toLocaleString("ko-KR"),
        }}
        gridYValues={4}
        theme={{
          text: { fill: theme.palette.white, fontSize: "12px" },
          grid: {
            line: {
              stroke: theme.palette.gray200,
              strokeWidth: 0.4,
            },
          },
        }}
        lineWidth={2.5}
        enableGridX={false}
        enableArea={true}
        areaBaselineValue={10}
        areaOpacity={0.25}
        defs={[
          {
            id: "gradientC",
            type: "linearGradient",
            colors: [
              { offset: 0, color: theme.palette.blue },
              { offset: 20, color: theme.palette.black },
            ],
          },
        ]}
        fill={[{ match: { id: "stock" }, id: "gradientC" }]}
        pointSize={6}
        pointColor={theme.palette.white}
        enablePointLabel
        pointLabel={(point) => Number(point.y).toLocaleString("ko-KR")}
        pointLabelYOffset={-20}
      />
    </ChartLayout>
  );
};

export default LineChart;
