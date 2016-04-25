require('../../shared/string');
var shared = require('../../shared/functions');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  prompts: function() {
    var done = this.async();

    var questions = [
      {
        name: 'name',
        message: 'The name of the project',
        default: shared.getBasename( this.destinationRoot() ),
        validate: function( input ) {
          return !input.isEmpty();
        }
      },
      {
        name: 'repo',
        message: 'The project repo uri (leave blank to skip github/bitbucket setup-up)',
        default: '',
        validate: function( input ) {
          return input.isEmpty() || input.isValidRepo()
        }
      }
    ];

    this.prompt(questions, function(answers) {
      this.name = answers.name.cleanProjectName();
      this.repo = answers.repo;
      done();
    }.bind(this));
  },

  writing: function() {
    process.chdir( this.destinationRoot() );

    this.fs.copyTpl(
      this.templatePath('composer.json'),
      this.destinationPath('./composer.json'),
      {
        name: this.name
      }
    );

    this.fs.copyTpl(
      this.templatePath('travis.yml'),
      this.destinationPath('./.travis.yml'),
      {
        name: this.name
      }
    );

    this.fs.copyTpl(
      this.templatePath('gitignore'),
      this.destinationPath('./.gitignore'),
      {
        name: this.name
      }
    );
  },

  install: function() {
    process.chdir( this.destinationRoot() );

    if( this.repo ) {
      this.spawnCommandSync('git', ['init']);
      this.spawnCommandSync('git', ['add', '.']);
      this.spawnCommandSync('git', ['commit', '-m', 'Initial commit', '--quiet']);
      this.spawnCommandSync('git', ['remote', 'add', 'origin', this.repo]);
      this.spawnCommandSync('git', ['push', '-u', 'origin', 'master']);
      this.spawnCommandSync('git', ['checkout', '-b', 'develop']);
      this.spawnCommandSync('git', ['push', '--set-upstream', 'origin', 'develop']);
    }
  }
});
