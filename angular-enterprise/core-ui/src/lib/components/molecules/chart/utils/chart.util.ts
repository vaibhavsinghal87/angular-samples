export class ChartUtility {
  static prepareChartData(
    chartData: any,
    xAxisKey: string,
    yAxisKey: string
  ) {
    // Prepare or transform chart data if necessary
    const xAxisLabels: any[] = [];
    const yAxisValues: any[] = [];
    chartData.forEach((item: any) => {
      xAxisLabels.push(item[xAxisKey]);
      yAxisValues.push(item[yAxisKey]);
    });
    const datasets = [
      {
        data: yAxisValues,
      },
    ];
    return { labels: xAxisLabels, datasets };
  }
}
