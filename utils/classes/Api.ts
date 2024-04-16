class Api {
  token: string;
  headers: any;

  constructor(token: string) {
    this.token = token;
    this.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    };
  }

  async get(url: string) {
    const res = await fetch(url, {
      method: "GET",
      headers: this.headers,
      next: { revalidate: 60 },
    });
    return res.json();
  }

  async post(url: string, body: any) {
    const res = await fetch(url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body),
      next: { revalidate: 60 },
    });
    return res.json();
  }

  async put(url: string, body: any) {
    const res = await fetch(url, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(body),
      next: { revalidate: 60 },
    });
    return res.json();
  }

  async delete(url: string) {
    const res = await fetch(url, {
      method: "DELETE",
      headers: this.headers,
    });
    return res.json();
  }

  async JWTGET(url: string, token: string | null) {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 60 },
    });
    return res.json();
  }
}

const api = new Api(process.env.NEXT_PUBLIC_API_KEY as string);

export default api;
