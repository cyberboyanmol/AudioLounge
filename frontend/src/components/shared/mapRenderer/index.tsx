import React from "react";

export type MapRendererProps<T extends Object> = {
  data: T[];
  children: React.ComponentType<T>;
  [key: string]: unknown;
};

const MapRenderer = <T extends Object>(props: MapRendererProps<T>) => {
  const ChildComponent = props.children as React.ComponentType<T>;
  return (
    <>
      {props.data.map((item: T, index) => {
        const keys = Object.keys(item);
        const firstKey = keys[0];

        return (
          <ChildComponent key={`${index}-${firstKey.toString()}`} {...item} />
        );
      })}
    </>
  );
};

export default MapRenderer;
