type ApiClientProps<Payload> = {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  route: string;
  token?: string;
  payload?: Payload;
};

export const apiClient = async <Payload, ResponseData>({
  method,
  route,
  token,
  payload,
}: ApiClientProps<Payload>) => {
  // fetch, stringify and parse
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  if (payload) {
    options.body = JSON.stringify(payload);
  }

  const response = await fetch(route, options);
  const data = await response.json();

  if (!response.ok) throw new Error(data?.message ?? "Unknown error");

  return data as ResponseData;
};
