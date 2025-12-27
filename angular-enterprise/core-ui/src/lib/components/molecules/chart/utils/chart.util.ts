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
        barThickness: 7,
        borderRadius: 5,
        backgroundColor: '#007bff',
        hoverBackgroundColor: '#0056b3',
        hoverBorderColor: '#080808ff',
        data: yAxisValues,
      },
    ];
    return { labels: xAxisLabels, datasets };
  }
}
