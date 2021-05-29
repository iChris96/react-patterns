import React from 'react';
import { useFetch } from '../../custom-hook/components/custom-hook-page';


const endpoint = "pokemon?limit=10"
const url = `https://pokeapi.co/api/v2/${endpoint}/`

const List = ({ data, isLoading }) => {

  if (isLoading) return (<div>is Loading......</div>)

  if (!data) return null

  return (
    <div>
      {
        data.results.map(e => (<h3>{e.name}</h3>))
      }
    </div>
  )
}


const ListWithRenderProps = ({ data, isLoading, renderItem, renderLoading }) => {

  if (isLoading) return (renderLoading())

  if (!data) return null

  return (
    <div>
      {
        data.results.map(e => (renderItem(e)))
      }
    </div>
  )

}

export const RenderPropsPage = () => {

  const { data, isLoading, isError } = useFetch(url);

  console.log(data)

  return (
    <>
      <h2>No - Render Props</h2>
      <List data={data} isLoading={isLoading} />
      <hr />
      <h2>With - Render Props</h2>
      <ListWithRenderProps
        data={data}
        isLoading={isLoading}
        renderLoading={() => <div>is Loading...... ..</div>}
        renderItem={(item) => <h3 style={{ color: 'blue' }}>{item.name}</h3>}

      />
    </>
  );
}
