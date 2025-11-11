interface ChartData {
  week: string;
  products: number;
}

export default function ProductsChart({ data }: { data: ChartData[] }) {
  console.log(data);

  return <div>Products Chart</div>;
}
