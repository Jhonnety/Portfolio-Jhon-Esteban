import { LanguageProvider } from './contexts'
import { Main } from './pages/Main'

function App() { 
    return (
        <LanguageProvider>
              <Main/>
        </LanguageProvider>
    ) }

export default App  
