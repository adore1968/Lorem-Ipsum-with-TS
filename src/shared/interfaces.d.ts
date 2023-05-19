import { ChangeEvent, FormEvent } from "react";

export type HandleChangeProps = ChangeEvent<HTMLInputElement>;

export type HandleSubmitProps = FormEvent<HTMLFormElement>;

export interface AppProviderValue {
  index: number;
  paragraphs: string[];
  handleChange: ({ target }: HandleChangeProps) => void;
  handleSubmit: (e: HandleSubmitProps) => void;
}
