import { useCallback, useEffect, useMemo, useState } from "react";

export const useDetailProductUtil = ({ data }: { data: any }) => {
  const [selectedColorId, setSelectedColorId] = useState(null);
  const selectedColor = useMemo(() => {
    if (data && data.colors) {
      return data?.colors?.find((c: any) => c._id === selectedColorId);
    }

    return null;
  }, [data, selectedColorId]);

  useEffect(() => {
    if (data && data?.colors && data?.colors?.length) {
      setSelectedColorId(data?.colors[0]?._id);
    }
  }, [data]);

  return {
    state: { selectedColor },
    event: { setSelectedColorId },
  };
};
