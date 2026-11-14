// Research content shown on the home and research pages.

export type Link = { label: string; url: string };

export type Item = {
  id: string;
  title: string;
  meta?: string; // venue, year or status
  authors?: string; // full author list; your name is bolded automatically
  summary: string;
  links?: Link[];
  featured?: boolean; // shown on the home page
};

export type Section = { id: string; title: string; intro: string; items: Item[] };

export const sections: Section[] = [
  {
    id: 'llm',
    title: 'LLM reasoning and interpretability',
    intro:
      'With IBM Research in Dublin since June 2025: an internship, then an ongoing research collaboration with the same team.',
    items: [
      {
        id: 'probes',
        title: 'Effectiveness of Hidden-State Probes for Localizing Reasoning Failures',
        meta: 'NeurIPS 2026 Workshop: Interpretability as a Science',
        authors:
          'Shubham Subhnil, Yannis Belkhiter, Erik Miehling, Adam Dahlgren Lindström, Elizabeth M. Daly',
        summary:
          "When a reasoning model gets a long problem wrong, which step broke it? We tested whether the model's internal activations can tell. A small classifier on the activations flags wrong answers without any extra LLM calls (AUROC 0.81, against 0.78 for a text-only classifier), but none of the individual probes we tested located the failing step better than a simple rule based on trace length.",
        links: [
          { label: 'Paper', url: 'https://arxiv.org/abs/2610.22046' },
          { label: 'OpenReview', url: 'https://openreview.net/forum?id=X1D0ZeEeZ4' },
          { label: 'Code', url: 'https://github.com/SSubhnil/Reasoning-Failures' },
          { label: 'Dataset', url: 'https://huggingface.co/datasets/ssubhnil/Reasoning-Failures' },
        ],
        featured: true,
      },
      {
        id: 'dataset',
        title: 'Reasoning-failures dataset and evaluation pipeline',
        meta: 'Open source',
        summary:
          '288k reasoning traces from Qwen3-4B and Qwen3-8B, with step-level rollout labels for a subset, probe scores and hidden-state features, plus the vLLM evaluation pipeline that produced them. Over 1,000 downloads on Hugging Face.',
        links: [
          { label: 'Dataset', url: 'https://huggingface.co/datasets/ssubhnil/Reasoning-Failures' },
          { label: 'Code', url: 'https://github.com/SSubhnil/Reasoning-Failures' },
        ],
      },
      {
        id: 'pipeline',
        title: 'Learning from wrong answers',
        summary:
          "A pipeline that turns an open LLM's wrong answers into new training data and fine-tunes the model on it, using teacher LLMs, LLM judges and models served on self-hosted vLLM.",
      },
      {
        id: 'structured',
        title: 'Structured-output tool',
        meta: 'Internal tool',
        summary:
          'The tool my IBM Research team uses for LLM calls. It checks every response against a JSON schema and retries failures, replacing a fragile LangChain generator.',
      },
      {
        id: 'ongoing-llm',
        title: 'In progress',
        summary:
          'I lead two newer projects with the team: an interpretability research direction for LLM agents, and a benchmark for AI agents that work with audio. More here when they are out.',
      },
    ],
  },
  {
    id: 'world-models',
    title: 'World models',
    intro:
      'My PhD at Trinity College Dublin, supervised by Vinny Cahill and Ivana Dusparic and funded by Science Foundation Ireland. A world model predicts how an environment will change, so an agent can plan ahead.',
    items: [
      {
        id: 'adaptive-wm',
        title: 'A world model that adapts at deployment time',
        meta: 'PhD thesis, December 2026',
        summary:
          'A world model, trained on simulation video, that keeps adapting when conditions change at deployment time. It beats leading methods on standard benchmarks and on an evaluation suite I built for unseen conditions.',
        featured: true,
      },
      {
        id: 'efficiency',
        title: 'Cheaper training and faster prediction',
        summary:
          'CUDA graphs nearly halved GPU time per training run with training curves unchanged, so the same compute budget runs almost twice the experiments. Recurrent decoding on a Mamba-3 backbone made each prediction step about 4x faster.',
        featured: false,
      },
    ],
  },
  {
    id: 'earlier',
    title: 'Earlier open source',
    intro: 'From my MSc in Applied Mathematics at Manchester and Formula Student racing before that.',
    items: [
      {
        id: 'racing-carla',
        title: 'RacingCARLA',
        meta: 'Python, CARLA simulator',
        summary:
          'A self-driving car that learns to drive faster around a racetrack in the CARLA simulator. It estimates its state from camera, radar, lidar and IMU data and drives with a learning model predictive controller that improves lap by lap.',
        links: [{ label: 'Code', url: 'https://github.com/SSubhnil/RacingCARLA' }],
      },
      {
        id: 'bac',
        title: 'BAC-DAC',
        meta: 'Python',
        summary: 'Bayesian actor-critic reinforcement learning for continuous control on OpenAI Gym.',
        links: [{ label: 'Code', url: 'https://github.com/SSubhnil/BAC-DAC-gym' }],
      },
      {
        id: 'vdt',
        title: 'Vehicle Dynamics Toolkit',
        meta: 'MATLAB',
        summary: 'Steady-state and transient vehicle simulations and tyre-data fitting for race car design.',
        links: [{ label: 'Code', url: 'https://github.com/SSubhnil/Vehicle-Dynamics-Toolkit' }],
      },
    ],
  },
];

export const featured = sections.flatMap((s) => s.items.filter((i) => i.featured));

// "Currently working on" lines on the home page. Aim only for unpublished work.
export const now: string[] = [
  'Finishing my PhD thesis on world models that adapt at deployment time (submitting December 2026).',
  'Leading a new interpretability research direction for LLM agents with IBM Research.',
  'Building a benchmark for AI agents that work with audio.',
];
