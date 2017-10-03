interface IChartInfoProps {
  data: IAppStoreCardItem,
  versions: string[],
  onVersionChange: (newVersion: string) => void
}
