import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";

const fetchCurrentUser = createAsyncThunk("user/fetchCurrentUser", async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const response = await api.JWTGET(`${routes.backend}/api/users/me`, token);
    if (!response.id) return null;
    const trueResponce = await api.get(
      `${routes.backend}/api/users/${response.id}?populate=orders.catalogItems.images&populate=deliveryAddress&populate=orders.user`
    );
    if (trueResponce.error) return null;

    return trueResponce;
  } catch (error) {
    return error;
  }
});

export default fetchCurrentUser;
