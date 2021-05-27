import React from 'react';
import NoCompound from './basic-example/no-compound'
import WithCompound from './basic-example/with-compound'

export const CompoundComponentPage = () => (
  <>
    <h2>NO - Compound Component</h2>
    {/* //<Post /> */}
    <NoCompound />

    <h2>With - Compound Component</h2>
    <WithCompound />


  </>
);
