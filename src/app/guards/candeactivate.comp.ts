export class CanDeactivateComponent {

    constructor(private message: string) {

    }
    canDeactivate(): boolean {
        return confirm(this.message);

    }
}