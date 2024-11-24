import { useState, useEffect } from "react";
import axios from "axios";
import { SocialMetadata } from "./metadataType";

const API_BASE = "http://localhost:5000/api/v1";

const useFetch = (url: string) => {
  const [metadata, setMetadata] = useState<SocialMetadata | null>(null);
  const [reqStatus, setReqStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setReqStatus("loading");
    setMetadata(null);

    try {
      axios
        .post(`${API_BASE}/metadata/extract`, { url })
        .then((res: any) => {
          console.log(res);
          if (res && res.data && res.status && res.status == 200) {
            res.data && setMetadata(res.data);
            setReqStatus("success");
          } else {
            setReqStatus("error");
            setError("Error: Metadata response empty");
          }
        })
        .catch((err: any) => {
          setReqStatus("error");
          setError("Metadata request failed");
          console.error("Metadata request failed: " + err);
        });
    } catch (error) {
      setReqStatus("error");
      setError("Error fetching metadata");
      console.error("Error fetching metadata: ", error);
    }
  }, [url]);

  return { metadata, reqStatus, error };
};

export default useFetch;
