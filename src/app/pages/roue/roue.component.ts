import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roue',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roue.component.html',
  styleUrls: ['./roue.component.css']
})


export class RoueComponent {
  nouvelleValeur = '';
  valeurs: { name: string; visible: boolean }[] = [];
  gagnant: string | null = null;
  afficherPopup = false;

  ajouter() {
    if (this.nouvelleValeur.trim()) {
      this.valeurs.push({
        name: this.nouvelleValeur.trim(),
        visible: true
      });
      this.nouvelleValeur = '';
    }
  }


  supprimer(index: number) {
    this.valeurs.splice(index, 1);
  }

  hideChoice(index: number) {
    if (index >= 0) {
    this.valeurs[index].visible = false;
  }
  }

  getIndexByName(nom: string): number {
    return this.valeurs.findIndex(v => v.name === nom);
  }


  // calcule des valeur pour tracer les segments de la roue
  getPath(index: number, total: number): string {
    const angle = (2 * Math.PI) / total;
    const start = index * angle;
    const end = start + angle;

    const x1 = 350 + 300 * Math.cos(start);
    const y1 = 350 + 300 * Math.sin(start);
    const x2 = 350 + 300 * Math.cos(end);
    const y2 = 350 + 300 * Math.sin(end);

    const largeArcFlag = angle > Math.PI ? 1 : 0;

    return `M350,350 L${x1},${y1} A300,300 0 ${largeArcFlag},1 ${x2},${y2} Z`;
  }

  // couleur des segments de la roue
  getColor(i: number): string {
    const colors = [
      '#3b82f6', // bleu
      '#f59e0b', // orange
      '#10b981', // vert menthe
      '#ef4444', // rouge
      '#8b5cf6', // violet
      '#f472b6', // rose
      '#14b8a6', // turquoise
      '#eab308', // jaune doré
      '#6366f1', // indigo
      '#fb923c'  // orange clair
    ];
    return colors[i % colors.length];
  }

  // position du text
  getTextTransform(index: number, total: number): string {
  const angle = ((360 / total) * index + 180 / total) * (Math.PI / 180); // centre du segment
  const radius = 180; // distance depuis le centre où le texte sera placé
  const x = 350 + radius * Math.cos(angle); // centre SVG = 350
  const y = 350 + radius * Math.sin(angle);
  return `translate(${x},${y})`;
}

rotation = 0;

tourner() {
  const tour = 5; // nombre de tours complets
  const total = this.valeurs.length;
  const angleParSegment = 360 / total;
  const random = Math.floor(Math.random() * 360);

  const actuelRotation = tour * 360 + random;
  this.rotation += actuelRotation;
  const decalage = this.rotation % 360; // degres de decalage de la roue


  const initialAngle = (270 - decalage + 360) % 360; // calculer a quel position la section gagnante etait a l'origine
  const indexGagnant = Math.floor(initialAngle / angleParSegment);


  setTimeout(() => {
    this.gagnant = this.valeurs[indexGagnant].name;
    this.afficherPopup = true;
  }, 4000);
}

fermerPopup() {
  this.afficherPopup = false;
  this.gagnant = null;
}




}













