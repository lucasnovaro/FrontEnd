import { useState } from "react"
import Button from "../../components/botao/Index"
import "./tipodoacao.css"

export default function TipoDoacao() {
  const [tipos, setTipos] = useState([])
  const [novoTipo, setNovoTipo] = useState("")
  const [salvos, setSalvos] = useState([])

  function adicionarTipo() {
    if (!novoTipo.trim()) return
    setTipos([...tipos, { id: Date.now(), nome: novoTipo }])
    setNovoTipo("")
  }

  function removerTipo(id) {
    setTipos(tipos.filter((t) => t.id !== id))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (tipos.length === 0) return
    setSalvos([...salvos, ...tipos])
    setTipos([])
    // envie para sua API aqui
  }

  function removerSalvo(id) {
    setSalvos(salvos.filter((s) => s.id !== id))
  }

  return (
    <div>
      <h2>Tipos de Doação</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Novo tipo (ex: Brinquedo)"
          value={novoTipo}
          onChange={(e) => setNovoTipo(e.target.value)}
        />
        <button type="button" onClick={adicionarTipo}>
          Adicionar
        </button>

        {/* Lista antes de salvar */}
        {tipos.length > 0 && (
          <ul>
            {tipos.map((tipo) => (
              <li key={tipo.id}>
                {tipo.nome}
                <button type="button" onClick={() => removerTipo(tipo.id)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}

        <br />
        <Button text="Salvar" />
      </form>

      {/* Tabela dos salvos */}
      {salvos.length > 0 && (
        <table border="1" cellPadding="8" style={{ marginTop: "20px", width: "100%" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Tipo de Doação</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {salvos.map((s, index) => (
              <tr key={s.id}>
                <td>{index + 1}</td>
                <td>{s.nome}</td>
                <td>
                  <button onClick={() => removerSalvo(s.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}