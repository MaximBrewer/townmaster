<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('type_id')->default(1);
            $table->unsignedBigInteger('user_id');
            $table->string('title');
            $table->string('fulltitle');
            $table->string('inn');
            $table->string('kpp');
            $table->string('ogrn');
            $table->string('okved');
            $table->string('phone');
            $table->string('fax');
            $table->string('email');
            $table->text('address');
            $table->enum('industry', ['other', 'processing', 'mining'])->default('other');
            $table->boolean('activity');
            $table->boolean('waste');
            $table->boolean('registration');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('type_id')->references('id')->on('company_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}
