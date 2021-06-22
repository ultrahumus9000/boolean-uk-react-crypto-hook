
import MainDetail from "./components/MainDetail";
import NewsFeed from "./components/NewsFeed";
import SideList from "./components/SideList";
import useFetch from "./components/hooks/useCripotolist"
import useSelectedCrypto from "./components/hooks/useSelectedCrypto";
import {CRIPTO_LIST}  from "./constants"
//////////////////////////////////////////////////
//                                              //
//  Don't forget to check all the code again!!  //
//                                              //
//////////////////////////////////////////////////

function App() {
  const  [cryptoList,setCryptoList]= useFetch(CRIPTO_LIST)
  const [selectedCrypto,selectCrypto,isSelectedCrypto] = useSelectedCrypto()

  // You can turn this into a custom hook////////////////////
 
  
  ///////////////////////////////////////////////////////////

  
  function findCripto(criptoId) {
    return cryptoList.find(({ id }) => id === criptoId);
  }

  function updateCryptoData(data, id) {
    setCryptoList((cryptoList) =>
      cryptoList.map((crypto) =>
        crypto.id === id ? { ...crypto, ...data } : crypto
      )
    );
  }
 


  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
      <aside className="side-list">
        {/* No need to worry about SideList and it's children, you can safey ignore it! */}
        <SideList
          cryptoList={cryptoList}
          isSelectedCrypto={isSelectedCrypto}
          selectCrypto={selectCrypto}
        />
      </aside>
      <main className="main-detail">
        {selectedCrypto ? (
          // Let's have a look at MainDetail
          <MainDetail
            selectedCrypto={findCripto(selectedCrypto)}
            updateCryptoData={updateCryptoData}
          />
        ) : (
          "Select a coin bro!"
        )}
        <NewsFeed />
      </main>
    </>
  );
}

export default App;
