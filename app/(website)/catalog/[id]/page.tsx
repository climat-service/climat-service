import CatalogItem from "@/components/CatalogItem/CatalogItem";

const CatalogItemPage = ({ params }: { params: any }) => {
  const { id } = params;

  return <CatalogItem id={id} />;
};

export default CatalogItemPage;
