<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class AdminSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        DB::table('administradors')->insert([
            'name' => "Jorgue",
            'mail' => "Jorgue@google.com",
            'rol' => "Administrador"

        ]);

        DB::table('administradors')->insert([
            'name' => "Ricardo",
            'mail' => "Ricardo@google.com",
            'rol' => "Editor"

        ]);

        DB::table('administradors')->insert([
            'name' => "Samuel",
            'mail' => "Samuel@google.com",
            'rol' => "Administrador"

        ]);

    }
}
