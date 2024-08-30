import { useCallback, useMemo, useState } from "react";

export const useDetailProductUtil = ({ data }: { data: any }) => {
  const [selectedColorId, setSelectedColorId] = useState(null);
  const selectedColor = useMemo(() => {
    if (data && data.colors) {
      return data?.colors?.find((c: any) => c._id === selectedColorId);
    }

    return null;
  }, [data, selectedColorId]);

  return {
    state: { selectedColor },
    event: { setSelectedColorId },
  };
};
