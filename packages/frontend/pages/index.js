import Header from '../components/Header';
import { useState } from 'react';


export default function App_orcamento() {

  const [valueSimple, setValueSimple] = useState();
  const [areaSimple, setAreaSimple] = useState();
  const [addressSimple, setAddressSimple] = useState();
  const [areaView, setAreaView] = useState();
  const [addressNew, setAddressNew] = useState();
  const [areaNew, setAreaNew] = useState();

  function handleValueSimpleChange(e) {
    setValueSimple(e.target.value);
  }

  function handleAreaSimpleChange(e) {
    setAreaSimple(e.target.value);
  }

  function handleAddressSimpleChange(e) {
    setAddressSimple(e.target.value);
  }

  function handleAreaViewChange(e) {
    setAreaView(e.target.value);
  }

  function handleAddressNewChange(e) {
    setAddressNew(e.target.value);
  }

  function handleAreaNewChange(e) {
    setAreaNew(e.targer.value);
  }


  
  return(
    <>
    <Header />
    <p>O app Orçamento da União 2023 permite que a verba pública seja dividida em áreas de atuação da
      política pública, e.g., educação, infraestrutura, saúde, etc. Para receberem verba destinada a uma área
      específica, órgãos precisam estar previamente credenciados para receber este tipo de verba.
    </p>
    <div>
      <h2> Transferências </h2>
      <div>
        <h3> Transferência simples </h3>
        <input 
          placeholder = "montante"
          value = {valueSimple}
          onChange = {handleValueSimpleChange}
        />
        <input 
          placeholder = "area"
          value = {areaSimple}
          onChange = {handleAreaSimpleChange}
        />
        <input 
          placeholder = "endereço"
          value = {addressSimple}
          onChange = {handleAddressSimpleChange}
        />
        <button>
          Transferir
        </button>
      </div>
      <div>
        <h3>Transferência em lote</h3>
        <div>
          <input
            placeholder = "endereço 1"
          />
          <input
            placeholder = "area 1"
          />
        </div>
        <div>
        <input
            placeholder = "endereço 2"
          />
          <input
            placeholder = "area 2"
          />
        </div>
        <button>adicionar linha</button>
      </div>
    </div>
    <div>
      <h2>Consulta de Areas</h2>
      <input
        placeholder = "endereço"
        value = {areaView}
        onChange = {handleAreaViewChange}
      />
      <button>Consulta</button>
    </div>
    <div>
      <h2>Uso exclusivo do órgão de controle</h2>
      <h3>Credenciamento de órgão</h3>
      <p>
        Credencie um endereço para habilitá-lo a receber verbas do orçamento.
        Se for aplicável, especifique a área de atuação para habilitá-lo a receber verbas destinadas a tal área.
      </p>
      <input
        placeholder = "endereço"
        value = {addressNew}
        onChange = {handleAddressNewChange}
      />
      <input
        placeholder = "area (opcional)"
        value = {areaNew}
        onChange = {handleAreaNewChange}
      />
      <button>
        Enviar
      </button>
      <h3>Credenciar órgão a área</h3>
      <p>Addicione uma área de competência ao endereço de um órgão.</p>
      <input
        placeholder = "endereço"
      />
      <input
        placeholder = "area"
      />
      <h3>Credenciamento de área</h3>
      <p>
        Adicione uma área de atuação da política pública para que a 
        execução do orçamento seja propriamente condicionada.
      </p>
      <input
        placeholder = "Nome da area"
      />
    </div>
    </>
  )
}
