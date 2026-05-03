export class Monster {
  constructor(
    public name: string = 'My Monster',
    public hp: number = 40,
    public figureCaption: string = 'N° 001 Monster',
    public attackName: string = 'Geo Impact',
    public attackStrength: number = 10,
    public attackDescription: string = 'Ceci est une attaque puissante qui inflige des dégâts considérables à l\'adversaire.'
  ) {}
}
