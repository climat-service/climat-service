import Reviews from "@/components/Reviews/Reviews";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";

const getCurrentItem = async (id: string) => {
  try {
    const response = await api.get(
      `${routes.backend}/api/catalog-items/${id}?populate=reviews.user`
    );
    return response.data.attributes;
  } catch (error) {
    return null;
  }
};

const ReviewsPage = async ({ params }: { params: any }) => {
  const { id } = params;
  const catalogItemData = await getCurrentItem(id);
  return (
    <Reviews reviews={catalogItemData ? catalogItemData.reviews.data : null} />
  );
};

export default ReviewsPage;
