import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ModalComponent } from "./modal.component";

describe("ModalComponent", () => {
	let component: ModalComponent;
	let fixture: ComponentFixture<ModalComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FormsModule, ReactiveFormsModule],
			declarations: [ModalComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("validate fields requiered", () => {
		const player = {
			id: 29,
			firstName: "Leo",
			lastName: "Messi",
			image: "https://i.pinimg.com/236x/58/a8/5d/58a85d8b9d081e51d59db9534341b7c3.jpg",
			attack: 100,
			defense: 100,
			skills: 100,
			idAuthor: 1,
			idPosition: 1,
		};
		expect(component.registerForm.invalid).toBe(true);
		component.getNameControl("name").setValue(player?.firstName);
		component.getNameControl("last").setValue(player?.lastName);
		component.getNameControl("image").setValue(player?.image);
		component.getNameControl("position").setValue(player?.idPosition);
		component.getNameControl("attack").setValue(player?.attack);
		component.getNameControl("defense").setValue(player?.defense);
		component.getNameControl("skills").setValue(player?.skills);
		fixture.detectChanges();
		expect(component.registerForm.valid).toBe(true);
	});
});
