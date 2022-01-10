<?php

namespace Database\Seeders;

use App\Models\Number;
use Illuminate\Database\Seeder;

class NumberPreferenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (Number::all() as $number) {
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
}
