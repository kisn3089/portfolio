import React from "react";
import { ChartLayout } from "./LineChartStyles";
import { ResponsiveLine } from "@nivo/line";
import { theme } from "@/styles/theme";
import { formatToLabel } from "@/lib/util/adjustDate";
import { defaultData } from "@/types/stockData.type";
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
          max: range.max + range.max / 8,
          min: range.min - range.min / 5,
        }}
        yFormat=">-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
          format: (value) => formatToLabel(value).toLabel,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 13,
          tickValues: 6,
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
        tooltip={(item) =>
          Number(item.point.data.yFormatted).toLocaleString("ko-KR")
        }
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
        pointLabel={(point) => Number(point.y).toLocaleString("ko-KR")}
        pointLabelYOffset={-20}
        useMesh
        // enablePointLabel -> 가격
      />
    </ChartLayout>
  );
};

export default LineChart;
