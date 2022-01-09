<?php

namespace App\Actions\PreferenceNumbers;

use App\Models\Number;
use Lorisleiva\Actions\Concerns\AsAction;

class CreatePreferenceNumberAction
{
    use AsAction;

    public function handle(Number $number): void
    {
        $number->preference()->create([
            'name' => 'auto_attendant',
            'value' => true
        ]);

        $number->preference()->create([
            'name' => 'voicemail_enabled',
            'value' => true
        ]);
    }
}
