import { useState } from "react"
import Button from "../../components/botao/Index"
import "./categoria.css"

export default function Categoria() {
  const [categorias, setCategorias] = useState([])
  const [novaCategoria, setNovaCategoria] = useState("")
  const [salvas, setSalvas] = useState([])

  function adicionarCategoria() {
    if (!novaCategoria.trim()) return
    setCategorias([...categorias, { id: Date.now(), nome: novaCategoria }])
    setNovaCategoria("")
  }

  function removerCategoria(id) {
    setCategorias(categorias.filter((c) => c.id !== id))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (categorias.length === 0) return
    setSalvas([...salvas, ...categorias])
    setCategorias([])
    // envie para sua API aqui
  }

  function removerSalva(id) {
    setSalvas(salvas.filter((s) => s.id !== id))
  }

  return (
    <div>
      <h2>Categorias</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nova categoria (ex: Sazonal)"
          value={novaCategoria}
          onChange={(e) => setNovaCategoria(e.target.value)}
        />
        <button type="button" onClick={adicionarCategoria}>
          Adicionar
        </button>

        {/* Lista antes de salvar */}
        {categorias.length > 0 && (
          <ul>
            {categorias.map((cat) => (
              <li key={cat.id}>
                {cat.nome}
                <button type="button" onClick={() => removerCategoria(cat.id)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}

        <br />
        <Button text="Salvar" />
      </form>

      {/* Tabela das salvas */}
      {salvas.length > 0 && (
        <table border="1" cellPadding="8" style={{ marginTop: "20px", width: "100%" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Categoria</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {salvas.map((s, index) => (
              <tr key={s.id}>
                <td>{index + 1}</td>
                <td>{s.nome}</td>
                <td>
                  <button onClick={() => removerSalva(s.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}