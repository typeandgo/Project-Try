import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon, reNamePokemonFromApi, updatePokemonName } from 'store/reducers/pokemon/pokemon.reducer';
import Layout from 'components/Layout';
import { Button } from 'antd';

const Pokemon = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon('bulbasaur'));
  }, [dispatch]);

  return (
    <Layout>
      <div className="pokemon">
        { isLoading && <p>Loading</p> }
        { error && <p>Oh no, there was an error</p> }
        { Object.keys(data).length > 0 && <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
          <Button onClick={() => dispatch(updatePokemonName('Aliyev')) }>Adını değiştir</Button>
          <Button onClick={() => reNamePokemonFromApi('Haydar') }>Adını değiştir ( with API CALL)</Button>
        </>}
      </div>
    </Layout>
  );
};

export default Pokemon;