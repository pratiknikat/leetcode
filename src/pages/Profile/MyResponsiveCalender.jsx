import { ResponsiveCalendar } from "@nivo/calendar";

const data = [
  {
    value: 185,
    day: "2017-07-14",
  },
  {
    value: 228,
    day: "2016-10-08",
  },
  {
    value: 275,
    day: "2017-04-09",
  },
  {
    value: 330,
    day: "2017-08-27",
  },
  {
    value: 348,
    day: "2018-01-16",
  },
  {
    value: 313,
    day: "2015-12-15",
  },
  {
    value: 241,
    day: "2018-02-15",
  },
  {
    value: 340,
    day: "2015-07-19",
  },
  {
    value: 221,
    day: "2017-03-10",
  },
  {
    value: 310,
    day: "2017-04-02",
  },
  {
    value: 115,
    day: "2016-08-06",
  },
  {
    value: 69,
    day: "2016-10-05",
  },
  {
    value: 1,
    day: "2015-06-18",
  },
  {
    value: 361,
    day: "2018-06-14",
  },
  {
    value: 60,
    day: "2015-07-18",
  },
  {
    value: 349,
    day: "2016-02-28",
  },
  {
    value: 185,
    day: "2015-06-12",
  },
  {
    value: 58,
    day: "2018-06-28",
  },
  {
    value: 325,
    day: "2017-08-29",
  },
  {
    value: 227,
    day: "2017-07-17",
  },
  {
    value: 261,
    day: "2015-09-11",
  },
  {
    value: 176,
    day: "2017-11-23",
  },
  {
    value: 108,
    day: "2017-10-09",
  },
  {
    value: 346,
    day: "2017-01-22",
  },
  {
    value: 374,
    day: "2018-04-03",
  },
  {
    value: 336,
    day: "2017-07-02",
  },
];
export const Calender = ({ data }) => (
  <ResponsiveCalendar
    data={data}
    from="2015-03-01"
    to="2016-07-12"
    align="right"
    emptyColor="#eeeeee"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    minValue={2}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    yearSpacing={45}
    monthSpacing={10}
    monthBorderWidth={0}
    monthBorderColor="#ffffff"
    monthLegendPosition="after"
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
