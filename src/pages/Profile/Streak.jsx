import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";

export const Streak = ({ data }) => (
  <ResponsiveCalendar
    data={data}
    from="2016-03-01"
    to="2016-07-12"
    emptyColor="#eeeeee"
    colors={["#cdeccd", "#9ed09e", "#64b164", "#3a903a", "#267326"]} // 5 shades of green
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    yearSpacing={35}
    monthSpacing={7}
    monthBorderWidth={5}
    monthBorderColor="#ffffff"
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: "bottom-right",
        direction: "row",
        translateY: 36,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: "right-to-left",
      },
    ]}
  />
);
