import { Component } from "@angular/core";
import { AlertController } from 'ionic-angular';
@Component({
    selector: "my-alert",
    templateUrl: "alert.component.html"
})
export class AlertComponent {
    constructor(public alertCtrl: AlertController) { }
    showAlert() {
        let alert = this.alertCtrl.create({
            title: "New Friend",
            subTitle: "Your friend, Obi wan Kenobi,....",
            buttons: ['OK']
        })
        alert.present();
    }

    //show prompt

    showPrompt() {
        let prompt = this.alertCtrl.create({
            title: "Logn information",
            message: "Enter username in window prompt",
            inputs: [
                {
                    name: "Username",
                    placeholder: "Username"
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log("Cancel login!");
                    }
                },
                {
                    text: "Login",
                    handler: data => {
                        console.log("Login imformation");
                    }
                }
            ]

        })
        prompt.present();
    }

    //show confirm

    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: "Confirm user skipperhoa",
            message: "information skipperhoa in class",
            buttons: [
                {
                    text: "cancel",
                    handler: () => {
                        console.log("Don't access skipperhoa");
                    },
                },
                {
                    text: "Access",
                    handler: () => {
                        console.log("Success Skipperhoa");
                    }
                }

            ]
        })
        confirm.present();
    }

    //show Radio

    showRadio() {
        let showRadio = this.alertCtrl.create();
        showRadio.setTitle('Lightsaber color');
        showRadio.addInput({
            type: 'radio',
            label: 'The Arrow 1',
            value: 'the_arrow_1',
            checked: true
        });
        showRadio.addInput({
            type: 'radio',
            label: 'The Arrow 2',
            value: 'the_arrow_2'

        });
        showRadio.addInput({
            type: 'radio',
            label: 'The Arrow 3',
            value: 'the_arrow_3',

        });

        showRadio.addButton('Cancel');
        showRadio.addButton({
            text: 'OK',
            handler: data => {
                console.log(data);
                // this.testRadioOpen = false;
                // this.testRadioResult = data;
            }
        });
        showRadio.present();

    }

    //show checked

    showCheckbox() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Which planets have you visited?');

        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });

        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: data => {
                console.log('Checkbox data:', data);
                // this.testCheckboxOpen = false;
                //this.testCheckboxResult = data;
            }
        });
        alert.present();
    }


}   