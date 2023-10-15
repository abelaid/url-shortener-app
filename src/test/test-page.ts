import { ComponentFixture } from '@angular/core/testing';

export class TestPage {

    constructor(private fixture: ComponentFixture<any>) {}

    expectElementContainsText(selector: string, text: string): void {
        expect(this._getCompiledElement().querySelector(selector)?.textContent).toContain(text);
    }

    inputValue(inputSelector: string, value: string) {
        const inputElement = this._getCompiledElement().querySelector(inputSelector) as HTMLInputElement;
        inputElement.value = value;
        inputElement.dispatchEvent(new Event('input'));
        this.fixture.detectChanges();
    }

    click(clickElementSelector: string): void {
        const element = this._getCompiledElement().querySelector(clickElementSelector) as HTMLElement;
        element.click();
        this.fixture.detectChanges();
    }

    private _getCompiledElement(): HTMLElement {
        this.fixture.detectChanges();
        return this.fixture.nativeElement as HTMLElement;
    }
}