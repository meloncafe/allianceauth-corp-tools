import React, { useState } from "react";
import { Panel } from "react-bootstrap";
import CorpAssetLocSelect from "../components/CorpAssetLocSelect";
import CorpAssetGroups from "../components/CorpAssetGroups";
import ErrorBoundary from "../components/ErrorBoundary";
import CorpSelect from "../components/CorpSelect";

const CorpAssets = () => {
  const [location, setLocation] = useState(0);
  const [corporation_id, setCorp] = useState(0);

  return (
    <ErrorBoundary>
      <Panel.Body className="flex-container-vert-fill">
        <CorpSelect setCorporation={setCorp} />
        <CorpAssetLocSelect
          corporation_id={corporation_id}
          setLocation={setLocation}
        />
        <CorpAssetGroups
          corporation_id={corporation_id}
          location_id={location}
        />
      </Panel.Body>
    </ErrorBoundary>
  );
};

export default CorpAssets;
