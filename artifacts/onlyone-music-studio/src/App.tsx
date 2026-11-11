import { type ReactNode } from 'react';
import { ErrorBoundary } from '@/components/error-boundary';
import NotFound from '@/pages/not-found';
import {
  AudioLines,
  AudioWaveform,
  CircleHelp,
  Disc3,
  Layers3,
  Mic2,
  Music2,
  Pause,
  Play,
  Plus,
  SkipBack,
  SkipForward,
  SlidersHorizontal,
  Sparkles,
  Square,
  Piano,
  Volume2,
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

function Home() {
  return (
    <main className="studio-shell">
      <header className="topbar">
        <div className="brand" data-testid="text-studio-brand">
          <div className="brand-mark" aria-hidden="true"><AudioWaveform /></div>
          <div>
            <div className="brand-name">ONLYONE MUSIC STUDIO</div>
            <span className="brand-sub">ESTÚDIO CRIATIVO NO NAVEGADOR</span>
          </div>
        </div>
        <div className="topbar-right">
          <div className="foundation-state" data-testid="status-foundation">
            <span className="state-dot" aria-hidden="true" />
            F0.1 · BASE TÉCNICA
          </div>
          <span className="top-separator" aria-hidden="true" />
          <span className="version-pill" data-testid="status-audio-engine">MOTOR DE ÁUDIO INDISPONÍVEL</span>
        </div>
      </header>

      <div className="main-layout">
        <aside className="rail" aria-label="Indicadores do estúdio">
          <div className="rail-mark active" aria-label="Composição" data-testid="status-nav-composicao"><Music2 /></div>
          <div className="rail-mark" aria-label="Faixas" data-testid="status-nav-faixas"><Layers3 /></div>
          <div className="rail-mark" aria-label="Ajuda" data-testid="status-nav-ajuda"><CircleHelp /></div>
        </aside>

        <section className="workspace" aria-label="Área de composição">
          <div className="workspace-heading">
            <div>
              <div className="eyebrow">ESPAÇO DE TRABALHO / COMPOSIÇÃO</div>
              <h1 className="project-title" data-testid="text-project-name">Composição sem título</h1>
              <p className="project-note">Um espaço em branco para ideias. Os ficheiros ainda não são guardados nesta versão.</p>
            </div>
            <div className="workspace-meta" aria-label="Indicadores musicais">
              <div className="meta-chip" data-testid="status-bpm">
                <span className="meta-label">Andamento</span>
                <span className="meta-value">— BPM</span>
              </div>
              <div className="meta-chip" data-testid="status-measures">
                <span className="meta-label">Compasso</span>
                <span className="meta-value">— / —</span>
              </div>
              <div className="meta-chip" data-testid="status-key">
                <span className="meta-label">Tom</span>
                <span className="meta-value">Não definido</span>
              </div>
            </div>
          </div>

          <div className="workspace-grid">
            <section className="composition-card" aria-labelledby="composition-title">
              <div className="composition-head">
                <div>
                  <div className="section-title" id="composition-title">
                    <span className="section-icon"><AudioLines /></span>
                    Área de composição
                  </div>
                  <p className="section-caption">Arranjo musical · visão de faixas</p>
                </div>
                <span className="empty-tag" data-testid="status-track-count">0 FAIXAS</span>
              </div>

              <div className="timeline-scroll">
                <div className="timeline">
                  <div className="ruler" aria-label="Régua de compassos">
                    <div className="ruler-label">COMPASSO</div>
                    {['01', '02', '03', '04', '05', '06', '07', '08'].map((bar) => (
                      <div className="measure" key={bar} data-testid={`text-measure-${bar}`}>{bar}</div>
                    ))}
                  </div>
                  <div className="track-region" data-testid="status-musical-tracks">
                    <div className="track-label-column">
                      <div className="track-label">
                        <span className="track-symbol"><Layers3 /></span>
                        <div>
                          <div className="track-name">Faixas musicais</div>
                          <div className="track-type">ÁREA VAZIA</div>
                        </div>
                      </div>
                    </div>
                    <div className="empty-lanes">
                      <div className="lane">
                        <span className="lane-placeholder">Nenhuma faixa adicionada</span>
                      </div>
                      <div className="lane" />
                      <div className="lane" />
                      <div className="lane" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="track-footer">
                <span>O espaço de arranjo está pronto para receber suas faixas.</span>
                <button className="disabled-action" type="button" disabled aria-disabled="true" data-testid="button-add-track">
                  <Plus /> Adicionar faixa
                </button>
              </div>
            </section>

            <aside className="right-stack" aria-label="Painéis de criação">
              <section className="side-panel" aria-labelledby="instrument-title">
                <div className="side-heading">
                  <div className="side-title" id="instrument-title"><Piano /> Instrumentos</div>
                  <span className="future-label">Futuro</span>
                </div>
                <div className="panel-body">
                  <div className="panel-empty-icon"><Disc3 /></div>
                  <div className="panel-empty-title">Nenhum instrumento disponível</div>
                  <p className="panel-empty-copy">A biblioteca de instrumentos será disponibilizada numa fase futura.</p>
                  <button className="disabled-action side-disabled" type="button" disabled aria-disabled="true" data-testid="button-open-instruments">
                    <Plus /> Instrumentos indisponíveis
                  </button>
                </div>
              </section>

              <section className="side-panel" aria-labelledby="vocal-title">
                <div className="side-heading">
                  <div className="side-title" id="vocal-title"><Mic2 /> Voz</div>
                  <span className="future-label">Futuro</span>
                </div>
                <div className="panel-body">
                  <div className="panel-empty-icon"><AudioLines /></div>
                  <div className="panel-empty-title">Gravação de voz indisponível</div>
                  <p className="panel-empty-copy">A captura e a edição vocal ainda não fazem parte desta versão.</p>
                  <button className="disabled-action side-disabled" type="button" disabled aria-disabled="true" data-testid="button-record-vocal">
                    <Mic2 /> Gravar voz
                  </button>
                </div>
              </section>

              <section className="side-panel ai-panel" aria-labelledby="assistant-title" data-testid="status-future-assistant">
                <div className="side-heading">
                  <div className="side-title" id="assistant-title"><Sparkles /> Assistente de criação</div>
                  <span className="future-label">Reservado</span>
                </div>
                <div className="panel-body">
                  <div className="panel-empty-icon"><Sparkles /></div>
                  <div className="panel-empty-title">O processo criativo permanece sob o seu controlo.</div>
                  <p className="panel-empty-copy">Este espaço está reservado para ferramentas futuras. Não há geração de música nesta versão.</p>
                  <span className="coming-soon">Indisponível na F0.1</span>
                </div>
              </section>
            </aside>
          </div>

          <section className="transport" aria-label="Controles de reprodução">
            <div className="transport-left">
              <div className="transport-controls">
                <button className="transport-button" type="button" disabled aria-label="Voltar ao início" data-testid="button-transport-start"><SkipBack /></button>
                <button className="transport-button play" type="button" disabled aria-label="Reproduzir" data-testid="button-transport-play"><Play /></button>
                <button className="transport-button" type="button" disabled aria-label="Pausar" data-testid="button-transport-pause"><Pause /></button>
                <button className="transport-button" type="button" disabled aria-label="Parar" data-testid="button-transport-stop"><Square /></button>
                <button className="transport-button" type="button" disabled aria-label="Avançar" data-testid="button-transport-forward"><SkipForward /></button>
              </div>
              <span className="transport-divider" aria-hidden="true" />
              <div className="transport-status" data-testid="status-playback"><strong>00:00</strong> · reprodução indisponível</div>
            </div>
            <div className="transport-right">
              <span className="transport-unavailable">SEM SINAL DE ÁUDIO</span>
              <div className="master-meter" aria-label="Medidor de áudio inativo" data-testid="status-audio-meter">
                {Array.from({ length: 7 }, (_, index) => <i className="meter-bar" key={index} />)}
              </div>
              <span className="transport-divider" aria-hidden="true" />
              <button className="transport-button" type="button" disabled aria-label="Volume indisponível" data-testid="button-volume"><Volume2 /></button>
              <button className="transport-button" type="button" disabled aria-label="Configurações indisponíveis" data-testid="button-audio-settings"><SlidersHorizontal /></button>
            </div>
          </section>
          <p className="footnote" data-testid="status-f0-1-note">F0.1 · Base de interface. Ainda não há motor de áudio, gravação, armazenamento de projectos ou processamento musical.</p>
        </section>
      </div>
    </main>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;
