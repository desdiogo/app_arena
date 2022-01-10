<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Number;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserrSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()
            ->has(Customer::factory()
                ->has(Number::factory()->count(10))
                ->count(10))
            ->count(10)
            ->create();
    }
}
