interface API {
  isLoading: boolean;
  errorMessage?: string;
}

interface Item {
  id: string;
  description: string;
  order: number;
  checked: boolean;
}
