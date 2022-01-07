import {Entreprise} from "../Entreprise";
import {SpecEntreprise} from "../SpecEntreprise";

export interface EntrepriseAndSpec {
  specEntreprises: SpecEntreprise[];
  entreprise: Entreprise;
}
